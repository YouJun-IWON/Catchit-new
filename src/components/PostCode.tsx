'use client';
import DaumPostcode from 'react-daum-postcode';

const PostCode = ({ setValue }: any) => {
  const complete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    // console.log(data);
    // console.log(fullAddress);
    // console.log(data.zonecode);

    setValue('address', fullAddress);
    setValue('postcode', data.zonecode);
  };

  return (
    <div>
      <DaumPostcode className='postmodal' autoClose onComplete={complete} />
    </div>
  );
};

export default PostCode;
