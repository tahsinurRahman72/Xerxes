from analyzePDF import analyzePDF
import sys
class extractor:
	def __getstate__(self):
		return self.__dict__

	def __setstate__(self, f):
		self.__dict__ = f

	def analyze_pdf(self, filename):
		result = analyzePDF(filename)
		my_list = [] 
		for i in result.values(): 
			my_list.append(i)
		return my_list

	def distribute_data_to_label(self, analyzed_list):
		analyzed_list_unwrap = []
		column_attributes = []
		column_attributes_corr_val = []
		for i in analyzed_list[0]:
			analyzed_list_unwrap.append(i)

		for key, val in analyzed_list_unwrap[0].items():
			column_attributes.append(key)
			column_attributes_corr_val.append(val)
		
		analyzed_list_unwrap[0].pop('version')
		analyzed_list_unwrap[0].pop('filename')
		analyzed_list_unwrap[0].pop('header')
		
		final_dict = dict(analyzed_list_unwrap[0])
		del column_attributes[0:3]
		del column_attributes_corr_val[0:3]
  
		return final_dict, column_attributes, column_attributes_corr_val

	def run(self, newFile):
		self.filename = [newFile]
		result = self.analyze_pdf(self.filename)
		dictionary, columns, values = self.distribute_data_to_label(result)
		
		return columns, values


extractPDF = extractor()
columns, values = extractPDF.run(sys.stdin.read())
print(values)