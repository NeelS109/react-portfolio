import React from 'react';
import myInfo from '../json/myInfo.json';

const githubDir = `/react-portfolio`;
const style = {
	maxHeight: "10%",
	width: "100%"
}

const Home = () => {
	const content = myInfo ? myInfo[0] : {};
	return (
		<div className="pb-5 mb-5 pb-sm-0 mb-sm-0">
			<div className="container">
				<div className="row">


					<div className="col-12 col-md-6">
						<div className="d-flex justify-content-center mt-2">
							<img className="rounded-circle py-2" alt="profile"
								src={`${githubDir}/assets/images/bioImage.jpeg`} style={style} />
						</div>
					</div>

					<div className="col-12 col-md-6">
						<div className="d-flex flex-column mt-2">
							<div className="text-center display-4">Neel Sheth</div>
							<div className="py-2">
								<div className="text-center py-2">
									<p>Product Support | Web Developer</p>
								</div>
								<div className="pt-2">
									<p className="text-justify">{content.background1}</p>
									<p className="text-justify">{content.background2}</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12">
						<div className="d-flex justify-content-center">
							<label className="h4">Skills</label>
						</div>
					</div>

					<div className="col-12 col-md-4">
						<div className="d-flex flex-column align-items-center p-2 shadow rounded">
							<label className="text-center text-md-left font-weight-light">Languages</label>
							<ul className="list-group list-group-flush w-100">
								{content.languages.map(lang =>
									<li className="list-group-item" key={lang.name} type={lang.type} icon={lang.icon} name={lang.name}>
										<i className={`${lang.icon} mr-2`} />
										{lang.name}
									</li>
								)}
							</ul>
						</div>
					</div>

					<div className="col-12 col-md-4">
						<div className="d-flex flex-column align-items-center p-2 shadow rounded">
							<label className="text-center text-md-left font-weight-light">Tools</label>
							<ul className="list-group list-group-flush w-100">
								{content.tools.map(tool =>
									<li className="list-group-item" key={tool.name} type={tool.type} icon={tool.icon} name={tool.name}>
										<i className={`${tool.icon} mr-2`} />
										{tool.name}
									</li>
								)}
							</ul>
						</div>
					</div>

					<div className="col-12 col-md-4">
						<div className="d-flex flex-column align-items-center p-2 shadow rounded">

							<label className="text-center text-md-left font-weight-light">Framework/Libraries</label>
							<ul className="list-group list-group-flush w-100">
								{content.libraries.map(lib =>
									<li className="list-group-item" key={lib.name} type={lib.type} icon={lib.icon} name={lib.name}>
										<i className={`${lib.icon} mr-2`} />
										{lib.name}
									</li>
								)}
							</ul>
						</div>

					</div>


				</div>
			</div>
		</div>
	)
}
export default Home;