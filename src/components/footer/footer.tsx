import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex max-sm:flex-col max-sm:items-center gap-4 sm:gap-16 max-sm:px-4 justify-center py-10 sm:py-20 '>
      <div>
        <Image
          src='/Catchit-footer.png'
          width={150}
          height={150}
          alt='footer logo'
        />
      </div>

      <div className='flex mt-6 flex-col w-full items-start gap-6'>
        <span className='text-sm text-gray-400'>Copyright © Univer Inc.</span>

        <span className='text-sm text-gray-400 leading-3'>
          <p>대표 | 사업자등록번호 | 통신판매업신고번호</p> <br /> <p>주소</p>
        </span>

        <span className='text-sm flex max-sm:flex-col gap-10 text-gray-400'>
          <p>개인정보처리방침</p> <p>서비스 이용약관</p>
          <p>광고상품 운영정책</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
