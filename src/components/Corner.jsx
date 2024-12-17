export const Corner = () => {
  return (
    <>
      <div className="w-[130px] h-[130px] bg-[#F3F4F6] rounded-[50%] absolute -left-[60px] bottom-[450px] flex ">
        <img
          className="w-[40px] h-[75px] mt-[25px] ml-[15px]"
          src="../pinecone1.png"
          alt="Pinecone logo"
        />
        <img
          className="w-[40px] h-[75px] mt-[25px] ml-[15px]"
          src="../pinecone2.png"
          alt="Pinecone logo"
        />
      </div>
      <div className="w-[30px] h-[30px] bg-[#F3F4F6] absolute -left-[15px] bottom-[560px] "></div>
      <div className="w-[30px] h-[25px] bg-[#0F141E] absolute -left-[0] bottom-[579px] rounded-[50%]"></div>
      <div className="w-[30px] h-[30px] bg-[#F3F4F6] absolute -left-[15px] bottom-[440px] "></div>
      <div className="w-[30px] h-[25px] bg-[#0F141E] absolute -left-[0] bottom-[426px] rounded-[50%]"></div>
    </>
  );
};
