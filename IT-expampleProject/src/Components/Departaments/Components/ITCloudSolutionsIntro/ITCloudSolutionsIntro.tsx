import './ITCloudSolutionsIntro.css';

export default function ITCloudSolutionsIntro() {
    return (
        <div className='Container'>
            <div className='Column'>
                <div className='TitleAndSubtitle'>
                    <div className='Title'>
                        <h1>IT CLOUD SOLUTIONS</h1>
                    </div>
                    <div className='Subtitle'>
                        <p>Specialists in AWS, Google and Azure cloud solutions for infrastucture and software development.</p>
                    </div>
                </div>
            </div>
            <div className='Column'>
                <div className='CloudsContainer'>
                    <div className='Azure-Card Cloud-Azure'>
                        <img src='/azureCloud.webp'/>
                    </div>
                    <div className='AWS-Card Cloud-AWS'>
                        <img src='/cloud.png' />
                    </div>
                    <div className='Google-Card Cloud-Google'>
                        <img src='/googleCloud.png' /> 
                    </div>
                </div>
            </div>
        </div>
    )
}