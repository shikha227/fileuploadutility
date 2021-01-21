
const fileuploader = require("../routes/api/fileuploader");

 const exepcted_ouput=[
  { seller_type: 'private', amount: 26080.48 },
  { seller_type: 'dealer', amount: 25037.33823529412 },
  { seller_type: 'other', amount: 25317.76404494382 }
]

describe('Upload', () => {
  it('should result average data', () => {
  	path="tests/uploads/listings.csv";

  	 expect(fileuploader.get_average_data(path)).toEqual(exepcted_ouput);
  });

  it('it should fail due wrong data', () => {
  	const path3="tests/uploads/wronglisting.csv";
  	 expect(fileuploader.get_average_data(path3)).not.toBe(exepcted_ouput);
  });

  it('it should fail due wrong path', () => {
  	const path2="./uplo/listings.csv";
  	 expect(fileuploader.get_average_data(path2)).toThrow();
  });



  });