from flask import Flask,redirect,url_for,abort
app=Flask(__name__)

@app.route("/")
def hello():
	return "Hello Napier"

@app.errorhandler(404)
def page_not_found(error):
	return "Cound not found",404


if __name__ == "__main__":
	app.run(debug=True)

	