### simple-encryption-RSA-AES-mix

first you enter password to open encryption page
then choose same seed with your friend and
share your public key together
your public key down of the page

stracture encryption = encrypted "random AES key" with your frined RSA public key +
                       hashed seed +
                       encrypted massage with "random AES key"

random AES key length is 16
RSA key is 512 bit

### encode ip to string (simple base64 function)
this fuction encode and decode ip
 ex: 192.168.1.100 => 30 2e 1 1a

radix64 =>
num -> encode
1 -> 1
10 -> A
35 -> Z
36 -> a
61 -> z
62 -> +
63 -> /
64 -> 10
