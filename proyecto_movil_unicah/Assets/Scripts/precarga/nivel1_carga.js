var ls:UnityEngine.SceneManagement.SceneManager;
function Start () {
    yield WaitForSeconds (1);
    ls.LoadScene("nivel1");
}

