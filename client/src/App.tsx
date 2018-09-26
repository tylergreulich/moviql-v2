// import * as React from 'react';
// import { gql } from 'apollo-boost';
// import { Mutation } from 'react-apollo';
// import Dropzone from 'react-dropzone';

// const uploadFileMutation = gql`
//   mutation($file: Upload!) {
//     uploadFile(file: $file)
//   }
// `;

// export default class App extends React.Component {
//   public render() {
//     return (
//       <Mutation mutation={uploadFileMutation}>
//         {mutate => (
//           <Dropzone onDrop={([file]) => mutate({ variables: { file } })}>
//             <p>
//               Drag some files here to upload, or click to select files to upload
//             </p>
//           </Dropzone>
//         )}
//       </Mutation>
//     );
//   }
// }
