from flask import Flask,redirect,url_for,abort
app=Flask(__name__)

@app.route('/private')
def private():
	return redirect(utl_for('login'))

@app.route('/login')
def login():
	return "Now we would get username & password"

@app.route("/")
def hello():
	return "Hello Napier"
@app.route('/force404')
def force404():
	abort(404)
@app.errorhandler(404)
def page_not_found(error):
	return "Couldn't find the page you requested.",404

if __name__=="__main__":
	app.run(host='0.0.0.0',debug=True)