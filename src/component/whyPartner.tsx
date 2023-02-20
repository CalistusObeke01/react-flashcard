import { whyPartnerWithUs } from '../assets/images'
const WhyPartner = () => {
    return <div className="flex justify-center space-x-16">
        <div style={{ marginTop: '52px'}}>
            <img 
                src={whyPartnerWithUs}
                className='max-w-lg'
                height={492}
            />
        </div>
        <div >
            <h2 className='text-why-partner mt-12 mb-6'>Why Partner with us?</h2>
            <hr style={{width: '514px', height:'7px', backgroundColor: '#005028'}}/>
            <p className='mt-6 text-partner-content w-[37.5rem]'>
                Black Mental Health Matters vision is to promote mental health research, 
                champion for mental health rights for people of African descent, combat 
                medical racism, create the infrastructure that Africa needs for mental 
                health and provide an environment where people with trauma can heal.
            </p>
        </div>
    </div>
}

export default WhyPartner