# -*- coding: utf-8 -*-

"""
Created on Sat May 26 10:23:57 2018

@author: Miguel Mini
"""

import numpy as np
import matplotlib.pyplot as plt
import os

clear = lambda: os.system('cls')

def scaling (x):
    a = np.array ([0.4, 2/82, 2/100, 0.4, 2/10000, 2/10000, 2/11, 2/10, 2/10, 2/10, -2, 1]).reshape (1, 12)
    b = np.array ([-1, -118/82, -1, -1, -1, -1, -13/11, -1, -1, -1, 1, 0]).reshape (1, 12)
    x = a * x + b
    return x
    
n_input = 12
n_mid = 50
n_out = 1

A = np.random.rand (n_input, n_mid) * 0.025
B = np.random.rand (n_mid, n_out) * 0.025

user = 1000

x = np.array ([3, 25, 2, 5, 1000, 500, 2, 1, 0, 0, 1, 1]).reshape (1, n_input)
y = np.array ([1]).reshape (1, 1)

lower = [0, 18, 0, 0, 0, 0, 1, 0, 0, 0, 0]
upper = [5, 100, 100, 5, 10000, 10000, 12, 10, 10, 10, 1]
mod = [3.5, 25, 5, 3, 2000, 200, 4, 3, 3, 0, 0]

lm = 75
cnt = 0

edad = np.zeros(lm)
confid = np.zeros(lm)

Data = []
target = []
for _ in range (user//2):

    for i in range (n_input - 2):
        x[0, i] = np.random.triangular(left = lower[i], mode = mod[i], right = upper[i], size = 1)
    
    #x[0, 1] = np.random.triangular(left = 18, mode = 28, right = 80, size = 1)
    
    x[0, n_input-2] = 1 if np.random.random() > 0.5 else 0 
    x[0, n_input-1] = 1

    #nx = 1*x
    y = np.random.random()
    
    Data.append(1*x)
    target.append(1*y)

n_iter = 5000
eta = 0.1
plt.ion()
while n_iter > 0:

    xr = []
    yr = []
    
    xb = []
    yb =[]
    
    for _ in range (user // 2):
        nx = Data[_]
        x = scaling(nx)
        y = target[_]
                
        C = np.matmul (x, A);
        fC = 2. / (1 + np.exp (-C)) - 1.
        D = np.matmul(fC, B)

        if D > 0.5:
            xr.append(nx[0, 1])
            yr.append(D[0])
        else:
            xb.append(nx[0, 1])
            yb.append(D[0])

        error_out = D - y;
        fCp = (1. - fC ** 2) / 2.
        error_mid = np.matmul (B, error_out).T * fCp

        B = B - eta * np.matmul(fC.T, error_out)
        A = A - eta * np.matmul(x.T, error_mid)
            
    plt.plot (xr, yr, '*b', xb, yb, '*r')
    plt.axis([18, 100, -0.1, 1])    
    plt.pause(0.001)
    plt.clf()
        
    n_iter -= 1
