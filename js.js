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

function generatePassword(length) {
        var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_+=-{}[]'/?.><,\\\"`"
        var retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}


var Base64 = (function () {

var ALPHA = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/';

var Base64 = function () {};

var _encode = function (value) {

  if (typeof(value) !== 'number') {
      throw 'Value is not number!';
  }

  var result = '', mod;
  do {
      mod = value % 64;
      result = ALPHA.charAt(mod) + result;
      value = Math.floor(value / 64);
  } while(value > 0);

  return result;
};

var _decode = function (value) {

  var result = 0;
  for (var i = 0, len = value.length; i < len; i++) {
      result *= 64;
      result += ALPHA.indexOf(value[i]);
  }

  return result;
};

Base64.prototype = {
  constructor: Base64,
  encode: _encode,
  decode: _decode
};

return Base64;

})();
