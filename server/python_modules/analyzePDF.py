from pdfid import pdfid

def analyzePDF(filename):
    options = pdfid.get_fake_options()
    options.scan = True
    options.json = True
    result = pdfid.PDFiDMain(filename, options)
    return result
