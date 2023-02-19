import { textVarient } from "../../../../Utils/staticData";
import { distributedSystems } from "../../../../Utils/images";
import { OrderList } from "../../../../Components/ContentControl/list";
import Img from "../../../../Components/ContentControl/image";

const content = <>Updating...</>;
const t = "φ(n)";

const rsa = [
  {
    type: "title",
    variant: textVarient.heading,
    content: "RSA (River,Shamir,Adleman) Algothem",
    style: {
      textAlign: "center",
      margin: "1%",
    },
  },
  {
    type: "text",
    varient: textVarient.body1,
    content: (
      <>
        <p>
          It is public or asymmetric algorthem , introduced in 1977 by Ron
          Rivest, Adi Shamir and Leonard Adleman
          <br />
          An RSA user creates and publishes a public key based on two large
          prime numbers, along with an auxiliary value. The prime numbers are
          kept secret Messages can be encrypted by anyone, via the public key,
          but can only be decoded by someone who knows the prime numbers. RSA is
          a relatively slow algorithm. Because of this, it is not commonly used
          to directly encrypt user data. More often, RSA is used to transmit
          shared keys for symmetric-key cryptography, which are then used for
          bulk encryption–decryption.
        </p>
        <ol>
          <li>
            p,q are two odd prime numbers <strong>n=p*q</strong>
          </li>

          <li>
            caluculate toficient <strong>φ(n) = (p-1) (q-1)</strong>
          </li>

          <li>
            Assume e (or) b (public key) such that{" "}
            <strong>gcd(b,φ(n)) = 1</strong>
          </li>

          <li>
            Asuume d (or) a (private key) such that a ≡ b^-1 mod φ(n){" => "}
            <strong>b*a mod {t} = 1</strong>
            <p>
              <strong>b*a ≡ 1 mod φ(n)</strong> <br />
              b*a ≡ 1 (1 mod anything = 1) <br />
              b*a mod {t} = 1 mod {t} &nbsp; (to convet ≡(congruent modulo) to
              =(equal) multiply with mod φ(n)) <br />
              b*a mod {t} = 1 mod {t} (1 mod anything = 1)
            </p>
          </li>

          <li>
            Now for encryption {"{n,b}"} {"=>"} <strong>c = m^b mod n</strong>{" "}
            (c=ciphet text,m=plain text)
          </li>

          <li>
            Decreption {"{n,a}"} {"=>"} <strong>m = c^a mod n</strong>
          </li>
        </ol>

        {/* 
        φ(n) = Eulers Totient Function means
        if φ(n) 
        1. 
        write the all numbers until n (ex:n=10)
        N=1,2,3,4,5,6,7,8,9,10
        then write the factors of 10 (2,5)
        then remove the numbers from N which devisible by factors of 10(2,5)
        then N=1,3,7,9 so φ(10) = 4 (count of remaining number in N)
        2.
        for ex : if n = primenumber (it has only one divisible(i.e it self only))
        N=1,2,3,4,5
        factors of 5 is {5} then remove 5 from N because it is divisible by 5 then count is 4
        φ(5) = (5-1)
        φ(n) = (n-1) if n is prime
        ≡ congruent modulo
         */}
      </>
    ),
  },

  {
    type: "text",
    varient: textVarient.body1,
    content: (
      <>
        <h3>Exercise</h3>
        <h5>
          1.For p = 7, q = 11 and b (or) e = 7, find private key (a or d) and
          find the corresponding ciphertext Decrypt the ciphertext obtained and
          hence verify that your ciphertext value is correct ?
        </h5>
      </>
    ),
  },
];

export default rsa;
