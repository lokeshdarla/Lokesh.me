# A Deep Dive into the World of JSON Web Tokens (JWT)

![https://cdn-images-1.medium.com/max/1600/1*dCtWuvLebBsYoE20F10yTA.png](https://cdn-images-1.medium.com/max/1600/1*dCtWuvLebBsYoE20F10yTA.png)

Illustration by [Lokesh Naga Sai Darla](https://medium.com/u/32baf6ab61f7)

A JSON Web Token (JWT), pronounced ‘jot’, is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) which is used for securely transmitting information between entities as a JSON object.

JSON Web Token helps to maintain the integrity and authenticity of the information because it is digitally signed using secret or public/private key pair using [RSA](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) or [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm).**An important thing to keep in mind about JWT is that it is a signed token and not an encrypted one.**

### Why we need JSON Web Token?

HTTP is a stateless protocol that means a new request does not remember anything about the previous one. So for each request, you need to login and authenticate yourself.

![https://cdn-images-1.medium.com/max/1600/1*_zgM91lRHqK66m23_yR8Qw.png](https://cdn-images-1.medium.com/max/1600/1*_zgM91lRHqK66m23_yR8Qw.png)

Illustration of stateless protocal by [Lokesh Naga Sai Darla](https://medium.com/u/32baf6ab61f7)

One approach to address this issue is to employ session-based authentication. In the context of session-based authentication, a unique session key is generated and stored on the server upon user login. Subsequently, when the client makes a request, it includes this session ID to authenticate itself and acquire the required information.

The server then verifies the validity of the session ID; if it is still valid, the server fulfils the request by providing the requested webpage or data. Conversely, if the session is no longer valid, the server responds with an error message indicating that the request is unauthorized. This mechanism helps maintain secure and authorised access to resources based on the validity of session information.

![https://cdn-images-1.medium.com/max/1600/1*WliYU_I2Qv1eqtTibZ3ODQ.png](https://cdn-images-1.medium.com/max/1600/1*WliYU_I2Qv1eqtTibZ3ODQ.png)

Illustration of Session-based Authentication by [Lokesh Naga Sai Darla](https://medium.com/u/32baf6ab61f7)

### Problems with Session-based Authentication

**Scalability :** In the current API era, a server can receive a large number of requests, and hence the server needs to be scaled up. Adding new resources can increase the complexity of the infrastructure as well.

**Session Management:** The server needs to manage the sessions by keeping track of all the active, inactive (expired, invalidated) sessions. The expired or invalidated sessions need to be removed from the memory.

**Performance:** For every request, the server needs to perform a lookup into the memory to check if the provided session object is valid or not. This back and forth can mark down the server.

### The better and effective solution:

The JSON Web Token (JWT) does not use sessions and hence prevents the problems with session based authentication. When you send your credentials to the server instead of making a session, the server will return a JSON Web Token.

### Structure of JSON Web Token

A JSON Web Token is nothing but a long encoded text string which is made up of three parts separated by a period. These parts are:

1. Header
2. Payload
3. Signature

A typical JWT looks like the following:

```
header.payload.signature
```

### Header

The header consists of two parts i.e. the type of token and the algorithm used for signing (such as HMAC SHA256 or RSA). The token type helps to interpret the token and in this case it’s JWT. For example,

```
{
  "typ": "JWT",
  "alg": "HS256"
}
```

This header is then encoded into base64 to form the first part of the JWT.

### Payload

The payload consists of the session data called as claims. Claims provide information about the client/user. There are three types of claims: *registered*, *public*, and *private* claims.

**Registered Claims:** These type of claims are predefined claims which can be used for increasing the security. These claims are not mandatory but recommended. Some of these claims are:

- **iss (Issuer) Claim**: The “iss” claim helps to identify the issuer of the token.
- **sub (Subject) Claim:** The “sub” claim identifies the subject of the JWT.
- **aud (Audience) Claim:** The “aud” claim identifies the recipients that the JWT is intended for.
- **exp (Expiration Time) Claim:** The “exp” claim is used to identify the expiration time on or after which the JWT must not be valid. Its value must be a number containing a NumericDate value. One important thing is that the current date/time must be before the expiration date/time.
- **nbf (Not Before) Claim:** The “nbf” claim identifies the time before which the JWT must not be accepted for processing. The current date/time must be after or equal to the not-before date/time
- **iat (Issued At) Claim:** The “iat” claim is used to identify the the time at which the JWT was issued. This claim can be used to determine the age of the JWT.
- **jti (JWT ID) Claim:** The “jti” claim gives a unique identifier for the JWT. The “jti” value is a case-sensitive string and it should be assigned in such a manner that ensures that there is a negligible probability that the same value will be repeated. The “jti” claim can be used to prevent the JWT from being replayed.

**Public Claims:** These type of claims can be defined by group of people using the JWTs. Whenever any new claim name is defined it is necessary that it should be registered in the IANA “JSON Web Token Registry” or it should contain a collision resistant name to avoid collisions.

**Private Claims:** These are custom claims defined and created by two parties in order to exchange information between them.

An example of payload is as follows:

```
{
  "sub": "user123",
  "name": "Lokesh",
  "role": "developer",
  "exp": "160659523850",
}
```

The payload is then Base64Url encoded to get the second part of the JWT.

### Signature

Signature is the most important part of JWT which helps to verify if the information within the token has been tampered with or not. It can be also used to verify that the sender of the JWT is who it says it is.

In order to calculate the signature, you require three things: an encoded header, an encoded payload, and a secret. First, you will take the encoded header and encoded payload and concatenate them with a period separator to form a string. This concatenated string will be hashed using an algorithm specified in the header and a secret key to calculate the signature.

Consider the following example where we will be using the RSA algorithm to generate a signature.

```
RSA(
  base64UrlEncode(header) + "." + base64UrlEncode(payload), secret
)
```

> The header and payload can be easily decoded (since it’s just base64) to retrieve information contained within the token. The signature can be just used to maintain the integrity of the token and not to secure the contained information. Therefore, you should pass any sensitive information in the token and if you want to pass make sure you encrypt the token to secure it.
> 

### How does a JSON Web Token work?

When a user sends his credentials to the server to login, the server authenticates the user. If the authorization is successful, the server sends a JSON Web Token to the user. The user can use the JWT to request any protected services/resources from the server by including the JWT in the **Authorization** header using the **Bearer** schema.

```
Authorization: Bearer <token>
```

When the server gets a request from the user to access any protected content, the protected routes of the server will look for a valid JWT in the Authorization header. If the token is present and is valid the server will allow access to the user.

The JWT contains necessary information about the user that can be used to identify the user, know the user’s privilege, and serve the user accordingly. Because of JWT, the server does not need to query the database every time a request comes in to check if the user has the necessary rights or not.

Every token assigned by the server is signed by a secret key known to the server only. Therefore, only the server can use the secret key to verify the token and to check if the token has tampered. If an attacker tries to make any changes in the token (like granting admin privileges), the signature of the token needs to be calculated again that will require the secret key. Since the attacker does not have a secret key making any changes to the token will invalid it. The server will discard such requests to prevent unauthorised access.

### Advantages of JSON Web Token

- **Compactness:** JSON is less verbose than XML and therefore when it is encoded it takes up less space making JWT more compact then SAML.
- **No need of Session:** The JWT can contain all the necessary information about the user and therefore there is no need to maintain a session object on the server, saving up server memory.
- **Built-in Expiration:** The JWT has claims that can be used to assign it a expiration date/time. Therefore, the token can become invalid on its own after the expiration period.
- **No need of Cookies:** The token can be stored in the localStorage, indexDB, or some native store. This will provide a protection against CORS and CSRF attacks.
- **Compatibility:** In most programming languages, JSON parsers are popular because they map directly to objects. Contrary, there is no natural document-to-object mapping in XML. This makes it simpler than SAML assertions to operate with JWT.

That’s it! Now you know pretty much everything about JSON Web Token.

If you find this article useful, please leave a comment. Also, don’t forget to share this article with your friends. Stay tuned for more articles in future. Thank you!
