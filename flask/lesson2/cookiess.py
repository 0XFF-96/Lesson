from flask import request 

@app.route('/')
def index():
	username = request.cookies.get('username')
