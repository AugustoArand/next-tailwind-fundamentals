import Image from 'next/image';


export default function Float() {
    return (
        <div className="border p-3">
            <Image
                className='float-right ml-3 mb-3'
                alt='Lo-Fi Image'
                width={120}
                height={120}
                src="/img/lo-fi-02.png"
            />

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eligendi necessitatibus incidunt, molestias sint cumque consequatur possimus velit maxime amet sed iusto voluptas officiis nesciunt impedit doloremque vel reiciendis exercitationem.
            </p>


        </div>
    );
}