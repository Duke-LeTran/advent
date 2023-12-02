# Author: Duke LeTran
# Advent of Code 2021
# Day 1: Sonar

from pathlib import Path

INPUT_FILE = Path.cwd() / 'input.txt'

def count_increase(ls:list):
    """ Part I."""
    count = 0
    prev = None
    for i, ptr in enumerate(ls):
        if prev is None: # if initializing, save prev, continue
            prev = ptr
            continue
        if ptr > prev: # if greater, count
            count += 1
            print(ptr, '✅', ':: (increased) :: count ::', count, \
                ':: (ptr)', ptr, ':: (prev)', prev)
            prev = ptr
        else: # else do nothing
            prev = ptr
            print(ptr, '💔', ':: (decreased) :: count ::', count, \
                ':: (ptr)', ptr, ':: (prev)', prev)
    return count

def sliding_window(ls:list):
    """Part II."""
    count = 0
    prev = None
    for i,j in enumerate(ls[:-2]):
        window = (ls[i], ls[i+1], ls[i+2])
        ptr = sum(window)
        if prev is None: # if initializing, save prev, continue
            prev = ptr
            continue
        if ptr > prev: # if greater, count
            print(ptr, '✅', ':: (increased) :: (count) ::', count, \
                ':: (ptr, prev)', ptr, prev, ':: (window)', window)
            count += 1
            prev = ptr
        else: # else do nothing
            if prev == ptr:
                print(ptr, '🟨', ':: (no change) :: (count) ::', count, \
                    ':: (ptr, prev)', ptr, prev, ':: (window)', window)
            else:
                print(ptr, '💔', ':: (decreased) :: (count) ::', count, \
                    ':: (ptr, prev)', ptr, prev, ':: (window)', window)
            prev = ptr
    return count

def main():
    # I. Read
    with open(INPUT_FILE) as f:
        # read file, split by newline, convert to int
        ls = [int(x) for x in f.read().split('\n')]
    
    # II. Magic
    a_count = count_increase(ls)
    b_count = sliding_window(ls) 

    # III. Answer
    print('Answers')
    print('####################')
    print('# Part I:', a_count)
    print('# Part II:', b_count )
    

if __name__ == '__main__':
    main()
    # Answer 1: 1400
    # Answer 2: 1429