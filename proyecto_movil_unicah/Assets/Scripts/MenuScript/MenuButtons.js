var ls:UnityEngine.SceneManagement.SceneManager;
function PlayGame() {
    ls.LoadScene("nivel1precarga");
}

function QuitGame() {
    Application.Quit();
}