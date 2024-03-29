import Image from 'next/image'

export const CommuneChat = () => {
    return (
    <div className='fixed bottom-10 right-10'>
        <button className='mt-3 rounded-full bg-gradient-to-br from-indigo-500 to-blue-800 px-3 py-3 text-sm font-medium text-white hover:from-indigo-500 hover:to-blue-900 md:mt-0 lg:mt-3 xl:mt-0'>
                <Image
                src='/sparkles-icon.svg'
                priority
                width={25}
                height={25}
                alt='commune ai agent logo'
                className='mx-auto'
                />
        </button>
    </div>)
}

