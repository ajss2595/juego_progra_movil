
var DeathSound : AudioSource;
var LevelMusic : GameObject;
var ls:UnityEngine.SceneManagement.SceneManager;
// cFollow : GameObject;
var theplayer : GameObject;
function OnTriggerEnter (col : Collider) {
    GlobalLives.LivesAmount -= 1;
    LevelMusic.SetActive(false);
    DeathSound.Play();
   // cFollow.GetComponent(EnemyMovement).enabled = false;
   //theplayer.GetComponent(ThirdPersonController).enabled=false;
    //theplayer.GetComponent("ThirdPersonCharacter").enabled=false;
    //theplayer.transform.localScale -= new Vector3(0, 0.7, 0);
    theplayer.GetComponent(CapsuleCollider).enabled=false;
    yield WaitForSeconds(1.5);
    ls.LoadScene("nivel1precarga");
} 