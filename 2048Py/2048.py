import curses
from random import randrange, choice
from collections import defaultdict

actions = ['Up', 'Left','Down', 'Right', 'Restart','Exit']

letter_codes = [ord(ch) for ch in 'WASDRQwasdrq']

actions_dict = dict(zip(letter_codes, action * 2))  # don't understand

def main(stdscr):
	def init():
		# reset the game
		return 'Game'
	def not_game(state):
		# draw Gameover or win 
		# read the user's action, judge reset or gameover
		responses = defaultdict(lambda:state) #loops
		responses['Restart'], responses['Exit'] = 'Init', 'Exit'
		return responses[action]
	def game():
	
	if action =='Restart':
		return 'Init'
	if action =='Exit':
		return 'Exit'
	if 
