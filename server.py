from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def boards():
    ''' this is a one-pager which shows all the boards and cards '''
    return render_template('drag_test.html')


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
