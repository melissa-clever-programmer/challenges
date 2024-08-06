# https://www.codewars.com/kata/58d5b39b1c0402c5f7002e0d
# Bear the Freelancer charges clients on the hour, but he adjusts his rate depending on how close friends he is with his clients. For close friends, he charges $25 per hour, for his other friends he charges $50, for his acquaintances his hourly rate is $100, reaching $125 for all his other clients.

# https://www.codewars.com/kata/570669d8cb7293a2d1001473/train/python

def bear_dollars(jobs):
    profit = 0
    print('jobs', jobs)
    if not jobs:    
        print('no earnings')
        return profit
    for j in jobs:
        print('the job', j)
        hours = j[0]
        level = j[1]
        if level.lower() == 'close friend':
            print('charge $25')
            profit += hours * 25
        elif level.lower() == 'friend':
            print('charge $50')
            profit += hours * 50
        elif level.lower() == 'acquaintance':
            print('charge $100')
            profit += hours * 100
        else:
            print('charge $125')
            profit += hours * 125
    print('the profit',profit)

bear_dollars([(10, 'Close Friend'), (3, 'Acquaintance'), (7, 'Lead from web'), (6, 'Friend'), (2, 'From advertisements')])
bear_dollars([])