from flask import request

@app.route('/upload', methods=['GET','POST'])

def upload_file():
	if request.method == 'POST':
		f = request.files['the_file']
		f.save('/var/ww/uploads/uploaded_file.txt')

