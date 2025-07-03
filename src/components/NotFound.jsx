// import Link from 'next/link'
// import React from 'react'

// const NotFound = () => {
//   return (
//     <div className='notFoundPage'>
//         <span>404</span>
//         <p>Axtatış üzrə səhifə tapılmadi</p>
//         <Link href="/">
//         <button>Ana səhifə</button>
//         </Link>
//     </div>
//   )
// }

// export default NotFound











import Link from 'next/link';
import React from 'react';

const NotFound = ({t}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          fontSize: '20rem',
          fontWeight: '600',
          color: '#ec1f27',

        }}
      >
        404
      </span>
      <p
        style={{
          margin: '1rem 0',
          color: '#ec1f27',
          fontSize: '2rem',
        }}
      >
        {t?.pagenotfound}
      </p>
      <Link href="/">
        <button
          style={{
            padding: '0.8rem 2rem',
            fontSize: '1rem',
            cursor: 'pointer',
            color: "white",
            background: "#ec1f27",
            borderRadius: "0.5rem" ,
            border: "none"
          }}
        >
          {t?.homebreadcrumbs}
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
