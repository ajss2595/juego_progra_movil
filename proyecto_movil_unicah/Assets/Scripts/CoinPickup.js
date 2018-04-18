var CoinAudio : AudioSource;
function OnTriggerEnter (col : Collider) {
    transform.position = Vector3(0, -1000, 0);
    CoinAudio.Play();
    GlobalCoins.CoinCount += 1;
}