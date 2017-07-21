import os 
from bs4 import BeautifulSoup
import markdown 

class MarkdownToHtml:
	headTag = '<head><meta charset="utf-8 /></head>'
	
	def __init__(self,cssFilePath = None):
		if cssFilePath != None:
			self.genStyle(cssFilePath)
	
	def genStyle(self,cssFilePath):
		with open(cssFilePath, 'r') as f:
			cssString = f.read()
		self.headTag = self.headTag[:-7] + '<style type="text/css">{}</style>'.format(cssString) + self.heading[-7:]

	def markdownToHtml(self, sourceFilePath, destinationDirectoty = None, outputFileName = None):
	if not destinationDirectory:
	
	destinationDirectory = os.path.dirname(os.path.abspath(sourseFilePath))
	if not outputFIleName:
		outputFileName = os.path.splitext(os.path.basename(sourceFilePath))[0] + '.html'
	if destinationDirectory[-1] !='/':
		destinationDirecory +=:
