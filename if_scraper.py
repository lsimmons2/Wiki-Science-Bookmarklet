import lxml
from lxml import html
import requests


class jObj(object):
	jName = 'No name'
	if1415 = 0
	if13 = 0


	def __init__(self, jName, if1415, if13):
		self.jName = jName
		self.if1415 = if1415
		self.if13 = if13


for i in range(1,19):
	if i == 1:
		page = requests.get('url.extension')
	else:
		page = requests.get('url'+str(i)+'.extension')

	#html.fromstring() takes content as bytes - need to use 'page.content' and not 'page.text'
	tree = html.fromstring(page.content)

	jNames = tree.xpath('//table[@class="tableizer-table"]/tr[position()>1]/td[2]/text()')
	if1415s = tree.xpath('//table[@class="tableizer-table"]/tr[position()>1]/td[4]/text()')
	if13s = tree.xpath('//table[@class="tableizer-table"]/tr[position()>1]/td[5]/text()')

	jObjs = list()
	for j in range(len(tree.xpath('//table[@class="tableizer-table"]/tr[position()>1]'))):
		jObjs.append(jObj(jNames[j], if1415s[j], if13s[j]))

	'''
	for k in range(len(jObjs)):
		print jObjs[k].jName, jObjs[k].if1415, jObjs[k].if13, '\n'
	'''