# Xerxes
Xerxes is a MEVN Stack Python Integrated Website built with a view to analyse a PDF [Portable Document Format] and it's internal folder architecture and detect if the following architecture lean towards being a malicious file or not.
The entire structure is built using 
* VueJs Framework for frontend application
* ExpressJs Framework for backend computation
* MongoDB cluster to store encrypted format of PDFs in chunks
* Python [PyShell] integrated with ExpressJs to breakdown PDFs and convert the information into a row-column data in JSON format which is then fed to 4 trained machine models

The machine models analyse the data and predicts if that instance is malicious or not, which as a result, is returned to the frontend for a customer to view
