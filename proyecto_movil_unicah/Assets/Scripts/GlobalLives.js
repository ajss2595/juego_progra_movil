static var LivesAmount : int = 1;
var InternalLives : int;
var LifeTextBox : GameObject;
var ls:UnityEngine.SceneManagement.SceneManager;
function Update () {
    InternalLives = LivesAmount;
    LifeTextBox.GetComponent.<Text>().text = "" + InternalLives;

    if (InternalLives == 0) {
        GameOverScene();
    }

}

function GameOverScene () {
    yield WaitForSeconds(2.9);
    ls.LoadScene("Gameover");
}