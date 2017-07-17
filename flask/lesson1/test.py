@app.route('user/<usrename>')

def show_user_profile(username):
	# show user name
	return 'User %s ' %username

@app.route('/post/<int:post_id>')

def show_post(post_id):
	# transfer?
	retrun 'Post %d' %post_id
