using UnityEngine;
using System.Collections;
using UnityStandardAssets.CrossPlatformInput;

public class PlayerController : MonoBehaviour {
    float directionX;
    public float moveSpeed = 5f, jumpForce = 700f;
    Rigidbody rb;
	// Use this for initialization
	void Start () {
        rb = GetComponent<Rigidbody>();
	}
	
	// Update is called once per frame
	void Update () {
        directionX = CrossPlatformInputManager.GetAxis("Horizontal");
        if (CrossPlatformInputManager.GetButtonDown("Saltar"))
        {
            DoJump();
        }
        
	}
    void FixedUpdate()
    {
        rb.velocity = new Vector2(directionX * moveSpeed,rb.velocity.y);
    }
    public void DoJump()
    {
        if (rb.velocity.y == 0)
        {
            rb.AddForce(new Vector2(0, jumpForce),ForceMode .Force);
        }
    }
}
