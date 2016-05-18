import lxml
from lxml import html
import requests
import random
import json


dictList = []

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

	for j in range(0,len(tree.xpath('//table[@class="tableizer-table"]/tr[position()>1]'))):
		dictList.append({'jName':jNames[j], 'if1415':if1415s[j], 'if13':if13s[j]})


with open('/path/to/file.json', 'a') as outfile:
	json.dump(dictList, outfile, sort_keys = True, indent=2)




