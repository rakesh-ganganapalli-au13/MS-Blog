import { textVarient } from "../../../../Utils/staticData";
import { distributedSystems } from "../../../../Utils/images";
import { OrderList } from "../../../../Components/ContentControl/list";
import Img from "../../../../Components/ContentControl/image";

import CustomGrid from "../../../../Components/ContentGrid";

const cryptography = [
  {
    type: "title",
    variant: textVarient.h4,
    content: "Cryptography",
    style: {
      textAlign: "center",
    },
  },

  {
    type: "text",
    variant: textVarient.body1,
    content: (
      <>
        '<b>Cryptography</b>' is the practice and study of techniques for
        securing communication and data in the presence of adversaries. <br /> '
        <b>Crypt</b>' meanes hidden or vault and '<b>graphy</b>' meanes write or
        study
      </>
    ),
  },

  {
    type: "image",
    style: {
      textAlign: "center",
      width: "50vw",
      height: "29vh",
      margin: "1%",
    },
    source: distributedSystems["tutorial-2"].image1,
  },

  {
    type: "text",
    style: {
      textAlign: "center",
    },
    content: (
      <>
        Cryptography is two types those are,
        <OrderList
          list={[<b>Symentric Cryptography</b>, <b>Asymentric Cryptography</b>]}
          position="center"
          width="360"
        />
      </>
    ),
  },

  {
    type: "title",
    variant: textVarient.heading,
    content: "What Is Symentric Cryptography?",
    style: {
      textAlign: "center",
      margin: "1%",
    },
  },

  {
    type: "text",
    variant: textVarient.body1,
    content: (
      <>
        It is cryptographic protocol where sender and receiver use a single{" "}
        <b>secreat key</b> for encryption and decreption
      </>
    ),
  },

  {
    type: "image",
    style: {
      textAlign: "center",
      width: "50vw",
      height: "50vh",
      margin: "3%",
    },
    source: distributedSystems["tutorial-2"].image2,
  },

  {
    type: "text",
    content: (
      <CustomGrid
        grids={[
          {
            columns: 8,
            content: (
              <>
                In behind pic, A,B,C are indivudual users, each user is
                genarating 2 secreat keys meanes total (3(3-1)) 6 keys but
                actually we need only 3 keys for 3 users. so number of keys are
                increased with respect to users. <br />
                ex : if you add one more user then user "A" will genarates one
                more secreat key. <br />
                So <b>O(n)</b> = <b>exponential</b> for symentric cryptography
                <br />
                <div style={{ textAlign: "center" }}>
                  Symentric cryptography is <b>two</b> types
                </div>
                <OrderList
                  list={[<b>Stram cipher</b>, <b>Block cipher</b>]}
                  position="center"
                  width="360"
                />
              </>
            ),
          },
          {
            columns: 4,
            content: (
              <>
                <Img
                  src={distributedSystems["tutorial-2"].image3}
                  alt={"Ex"}
                  style={{ width: "25vw", height: "35vh" }}
                />
              </>
            ),
          },
        ]}
        space={0}
      />
    ),
  },

  {
    type: "text",
    variant: textVarient.subtitle1,
    content: "Stream Cipher",
    style: {
      textDecoration: "underline black",
    },
  },

  {
    type: "text",
    variant: textVarient.body1,
    content: (
      <>
        <br />
        1.Stream cipher will genarate secreat key as long as data
        <br />
        2.It will encrypt and decrypt the all the bits induvudually <br />
        for example if data size is 5kb then secreat key also 5kb
        <br />
        3.Secreat key will use only one time(one time pad). <br />
        4.If secreat key will use two times (two time pad) then information will
        easily decrept by hacker <br />
        <br />
        <CustomGrid
          grids={[
            {
              columns: 7,
              content: (
                <>
                  ex : secreat key = 1001 <br />
                  msg 1 : 1100 , msg 2 :0010 <br />
                  msg 1 ⊕ secreat key = cipherText1(c1) <br />
                  msg 2 ⊕ secreat key = cipherText2(c1) <br />
                  c1 ⊕ c2 = msg 1 ⊕ msg 2 <br /> <br />
                  in above and behind example partially message is exposed so
                  this is the reason two time pad is less secure so not
                  recommended to use one secreat key multilple times
                </>
              ),
            },
            {
              columns: 5,
              content: (
                <>
                  <Img
                    src={distributedSystems["tutorial-2"].image4}
                    alt={"Ex"}
                    style={{ width: "35vw", height: "45vh" }}
                  />
                </>
              ),
            },
          ]}
          space={0}
        />
      </>
    ),
  },

  {
    type: "text",
    variant: textVarient.subtitle1,
    content: "Block Cipher",
    style: {
      textDecoration: "underline black",
    },
  },
  {
    type: "text",
    variant: textVarient.body1,
    content: (
      <>
        <br />
        <CustomGrid
          grids={[
            {
              columns: 7,
              content: (
                <>
                  1.Block cipher will genarate secreat key as fixed size
                  <br />
                  2.It will split the message into blocks based on key size
                  <br />
                  3.It will encrypt and decrypt the all the blocks induvudually{" "}
                  <br /> <br />
                  for example if data size is 9 bits and secret key is 3 bits as
                  show in image <br />
                  secreat key = 101 <br />
                  message: 010110001 <br />
                  Encryption : <br />
                  block 1 : 010 ⊕ 101 = 111(c1)
                  <br />
                  block 2 : 110 ⊕ 101 = 011(c2)
                  <br />
                  block 3 : 001 ⊕ 101 = 100(c3)
                  <br /> Decryption :
                  <br />
                  d1 = cl⊕k : 111 ⊕ 101 = 010
                  <br />
                  d2 = c2⊕k : 011 ⊕ 101 = 110
                  <br />
                  d3 = c3⊕k : 100 ⊕ 101 = 001
                  <br /> originally msg = d1 + d2 + d3(010 110 001)
                </>
              ),
            },
            {
              columns: 5,
              content: (
                <>
                  <Img
                    src={distributedSystems["tutorial-2"].image5}
                    alt={"Ex"}
                    style={{ width: "35vw", height: "70vh" }}
                  />
                </>
              ),
            },
          ]}
          space={0}
        />
      </>
    ),
  },
];

export default cryptography;
