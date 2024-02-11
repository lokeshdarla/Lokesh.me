import React from 'react';
import ReactMarkdown from 'react-markdown';

function BlogSection() {
  const data = { markdown: `# Markdown Example

  ## Emphasis
  
  This is *italic* text and this is **bold** text.

  A JSON Web Token (JWT), pronounced ‘jot’, is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) which is used for securely transmitting information between entities as a JSON object.

  JSON Web Token helps to maintain the integrity and authenticity of the information because it is digitally signed using secret or public/private key pair using [RSA](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) or [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm).**An important thing to keep in mind about JWT is that it is a signed token and not an encrypted one.**
  
  ## Lists
  
  ### Unordered List
  
  - Item 1
  - Item 2
    - Subitem 2.1
    - Subitem 2.2
  - Item 3
  
  

  ### Structure of JSON Web Token

A JSON Web Token is nothing but a long encoded text string which is made up of three parts separated by a period. These parts are:

1. Header
2. Payload
3. Signature

A typical JWT looks like the following:
  ` 
  
  

};

  return (
    <div className='relative flex items-center justify-center'>
      <article className="prose">
        <ReactMarkdown>{data.markdown}</ReactMarkdown>
      </article>
    </div>
  );
}

export default BlogSection;
