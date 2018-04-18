var Enemy : GameObject;

function OnTriggerEnter (col : Collider) {
    this.GetComponent(BoxCollider).enabled = false;
    Enemy.GetComponent(EnemyMovement).enabled = false;
    Enemy.transform.localScale -= new Vector3(0, 0.8, 0);
    Enemy.transform.localPosition -= new Vector3(0, 0.4, 0);
    yield WaitForSeconds(1);
    Enemy.transform.position = Vector3(0, -1000, 0);
}