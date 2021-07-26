function key_rsa(PassPhrase = "im_happy#", bitlength = 1024) {
    let s_key = cryptico.generateRSAKey(PassPhrase, bitlength);
    let p_key = cryptico.publicKeyString(s_key);
    //let p_key_md5 = cryptico.publicKeyID(p_key);
    return { s_key: s_key, p_key: p_key };
}

function rsa_enc(public_key, plaintext) {
    let ob_enc = cryptico.encrypt(plaintext, public_key)
    if (ob_enc.status == 'success') {
        return ob_enc.cipher;
    }
}

function rsa_dec(private_key, ciphertext) {
    let ob_dec = cryptico.decrypt(ciphertext, private_key)
    if (ob_dec.status == 'success') {
        return ob_dec.plaintext;
    }
}

function aes_enc(sec_key, msg) {
    return CryptoJS.AES.encrypt(msg, sec_key).toString();
}

function aes_dec(sec_key, enc_msg) {
    return CryptoJS.AES.decrypt(enc_msg, sec_key).toString(CryptoJS.enc.Utf8);
}

function randstr(byte) {
    return CryptoJS.lib.WordArray.random(byte).toString();
}