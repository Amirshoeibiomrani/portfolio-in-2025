import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/other/logo.svg'

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} width={54} height={54} priority alt='Logo' />
      </Link>
  )
}
export default Logo