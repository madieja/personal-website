// service unavailable

import React from "react";

const Maintenance = () => {
  return (
    <>
      <section id="maintenance-page" className="d-flex align-items-center justify-content-center"
        style={{ 
            width: "100%",
            minHeight: '100vh',  
            background: 'white', 
            overflow: 'hidden',
        }}>

            <div className="container d-flex justify-content-center align-items-center flex-column-reverse flex-md-row" style={{
                background: 'white'
            }}>
                <div style={{marginRight: '15px'}}>
                    <strong><p className="upperline text-center text-md-right mb-1" style={{fontFamily: '"Hasanamadolobombom", sans-serif', textTransform: 'uppercase', fontWeight:'bold'}}>503 Page Unvailable</p></strong>
                    <h3 className="text-center text-md-right mb-1" style={{lineHeight: 1}}>Sorry, I am currently working on this site</h3>
                    <p className="text-center text-md-right mb-0">It will be back as soon as posible</p>
                </div>

                <div className="mb-3 mb-md-0" style={{width: '100px'}}>
                    <span style={{width: '100%', display: 'block', animation: 'rotation 10s linear infinite'}}>
                        <svg 
                            version="1.1" 
                            id="Layer_1" 
                            xmlns="http://www.w3.org/2000/svg" 
                            xmlnsXlink="http://www.w3.org/1999/xlink" 
                            x="0px" y="0px"
                            viewBox="0 0 100 100" 
                            enableBackground="new 0 0 100 100" 
                            xmlSpace="preserve"
                            style={{width: '100%', height: 'auto'}}
                            >
                            <g>
                            <path
                                fill="#222222"
                                d="M15.926,59.644c-2.43,0-4.973,0.005-7.516-0.002c-2.134-0.006-3.426-1.314-3.425-3.446
                                c0.002-4.153-0.005-8.306,0.009-12.458C5,41.65,6.286,40.374,8.38,40.362c2.311-0.013,4.622-0.021,6.932,0.01
                                c0.59,0.008,0.85-0.164,1.071-0.743c0.773-2.024,1.599-4.03,2.49-6.005c0.275-0.61,0.18-0.937-0.267-1.369
                                c-1.564-1.513-3.09-3.066-4.632-4.603c-1.785-1.78-1.787-3.513,0.007-5.31c2.792-2.797,5.586-5.592,8.384-8.383
                                c1.784-1.78,3.517-1.761,5.31,0.041c1.559,1.566,3.136,3.116,4.676,4.702c0.394,0.405,0.693,0.426,1.211,0.199
                                c2.015-0.883,4.053-1.718,6.105-2.513c0.519-0.201,0.716-0.419,0.707-0.987c-0.034-2.377-0.027-4.756-0.01-7.133
                                c0.014-1.95,1.33-3.265,3.288-3.272c4.253-0.016,8.507-0.016,12.76-0.006c1.869,0.005,3.217,1.359,3.229,3.235
                                c0.016,2.378,0.019,4.756-0.007,7.133c-0.006,0.546,0.145,0.793,0.691,1.003c2.054,0.789,4.091,1.629,6.099,2.528
                                c0.573,0.257,0.882,0.171,1.287-0.245c1.567-1.606,3.159-3.188,4.754-4.766c1.666-1.648,3.435-1.65,5.092,0
                                c2.896,2.882,5.786,5.771,8.667,8.667c1.512,1.52,1.525,3.356,0.03,4.879c-1.619,1.649-3.281,3.256-4.88,4.924
                                c-0.23,0.24-0.397,0.79-0.283,1.07c0.932,2.28,1.938,4.531,2.988,6.944c2.303,0,4.809-0.002,7.316,0
                                c2.412,0.002,3.619,1.219,3.62,3.649c0.001,4.052,0.003,8.105-0.001,12.157c-0.002,2.21-1.27,3.473-3.489,3.48
                                c-2.277,0.006-4.555,0.02-6.832-0.011c-0.59-0.008-0.852,0.165-1.073,0.743c-0.773,2.024-1.599,4.03-2.49,6.005
                                c-0.275,0.61-0.18,0.935,0.267,1.368c1.61,1.562,3.193,3.153,4.765,4.754c1.613,1.644,1.614,3.396,0.002,5.017
                                c-2.88,2.898-5.769,5.788-8.668,8.667c-1.581,1.57-3.348,1.581-4.947,0.022c-1.63-1.59-3.242-3.199-4.825-4.837
                                c-0.45-0.465-0.791-0.487-1.377-0.228c-1.981,0.877-3.99,1.694-6.012,2.474c-0.523,0.202-0.712,0.425-0.704,0.989
                                c0.033,2.344,0.02,4.688,0.012,7.033c-0.007,2.071-1.307,3.367-3.394,3.372c-4.186,0.008-8.373,0.008-12.559-0.001
                                c-2.011-0.004-3.319-1.319-3.328-3.334c-0.01-2.311-0.025-4.622,0.012-6.932c0.01-0.629-0.163-0.912-0.785-1.146
                                c-1.995-0.753-3.965-1.578-5.915-2.443c-0.575-0.255-0.926-0.264-1.384,0.211c-1.557,1.615-3.156,3.19-4.75,4.769
                                c-1.653,1.637-3.451,1.63-5.095-0.012c-2.844-2.839-5.687-5.68-8.524-8.526c-1.7-1.705-1.707-3.461-0.02-5.162
                                c1.58-1.593,3.169-3.178,4.761-4.759c0.321-0.319,0.545-0.561,0.295-1.106C17.929,64.333,16.974,62.06,15.926,59.644z
                                M20.543,25.116c1.595,1.579,3.25,3.188,4.87,4.831c1.209,1.226,1.393,2.663,0.466,4.114c-2.02,3.16-3.433,6.555-4.238,10.219
                                c-0.348,1.582-1.591,2.494-3.199,2.505c-1.105,0.008-2.21-0.002-3.315-0.003c-1.224-0.001-2.447,0-3.663,0c0,2.214,0,4.277,0,6.437
                                c2.25,0,4.451-0.001,6.652,0c2.11,0.002,3.242,0.874,3.68,2.929c0.725,3.406,2.054,6.554,3.902,9.496
                                c1.151,1.833,0.991,3.138-0.536,4.671c-1.553,1.558-3.113,3.111-4.566,4.562c1.537,1.549,3.009,3.032,4.538,4.572
                                c1.542-1.561,3.11-3.164,4.698-4.747c1.351-1.346,2.762-1.538,4.351-0.515c3.04,1.958,6.322,3.302,9.839,4.12
                                c1.936,0.45,2.756,1.531,2.761,3.488c0.005,2.233,0.001,4.467,0.001,6.726c2.191,0,4.277,0,6.438,0
                                c0-2.372-0.005-4.677,0.002-6.982c0.005-1.576,0.887-2.856,2.387-3.181c3.767-0.817,7.254-2.259,10.506-4.326
                                c1.304-0.828,2.735-0.596,3.869,0.49c1.136,1.089,2.241,2.21,3.341,3.336c0.548,0.561,1.054,1.164,1.505,1.666
                                c1.652-1.634,3.122-3.088,4.666-4.615c-1.619-1.598-3.278-3.204-4.9-4.846c-1.19-1.205-1.411-2.636-0.528-4.025
                                c2.048-3.222,3.513-6.664,4.304-10.406c0.313-1.482,1.615-2.402,3.172-2.409c2.009-0.008,4.018,0,6.028-0.004
                                c0.321-0.001,0.642-0.032,0.969-0.05c0-2.161,0-4.224,0-6.268c-0.105-0.048-0.163-0.097-0.221-0.097
                                c-2.109-0.01-4.219-0.013-6.328-0.021c-2.265-0.009-3.336-0.824-3.809-3.021c-0.726-3.372-2.051-6.484-3.875-9.4
                                c-1.155-1.846-0.994-3.142,0.529-4.67c1.555-1.559,3.115-3.112,4.562-4.558c-1.528-1.554-2.993-3.045-4.499-4.577
                                c-1.558,1.564-3.133,3.16-4.724,4.74c-1.352,1.342-2.773,1.537-4.352,0.521c-3.04-1.956-6.318-3.317-9.841-4.115
                                c-1.906-0.432-2.76-1.544-2.763-3.492c-0.003-2.234-0.001-4.468-0.001-6.736c-2.189,0-4.277,0-6.434,0
                                c0,2.264-0.004,4.468,0.001,6.672c0.004,2.014-0.806,3.154-2.775,3.592c-3.565,0.792-6.861,2.182-9.944,4.127
                                c-1.5,0.947-2.906,0.74-4.191-0.515c-0.862-0.842-1.72-1.69-2.556-2.559c-0.753-0.782-1.474-1.596-2.133-2.312
                                C23.537,22.128,22.074,23.589,20.543,25.116z"/>
                            <path fill="#222222" d="M50.023,66.074c-8.872,0-16.092-7.201-16.094-16.054c-0.002-8.923,7.2-16.099,16.152-16.093
                                c8.827,0.006,15.999,7.248,15.995,16.15C66.071,58.855,58.826,66.074,50.023,66.074z M59.645,50.092
                                c0.059-5.268-4.192-9.649-9.449-9.74c-5.369-0.093-9.754,4.163-9.843,9.553c-0.086,5.233,4.216,9.664,9.454,9.735
                                C55.197,59.714,59.585,55.456,59.645,50.092z"/>
                        </g>
                        </svg>
                    </span>
                </div>

            </div>

      </section>
    </>
  );
};

export default Maintenance;
