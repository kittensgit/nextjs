import Link from 'next/link';

export default function Show() {
    return (
        <div>
            <h2>Show page</h2>
            <Link href={'/'}>Main</Link> <br />
            <Link href={'/client'}>Client</Link> <br />
            <Link href={'/client/1234'}>Client 1234</Link>
        </div>
    );
}
