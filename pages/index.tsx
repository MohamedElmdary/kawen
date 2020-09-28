import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../components/layout";
import classes from "./Home.module.scss";

interface Field {
	title: string;
	description: string;
	image: string;
}

type Props = { data: Field[] };

const data: Field[] = [
	{
		title: "Front End development",
		description: "Lorem",
		image: "/images/home__fieldImg.png",
	},
	{
		title: "Android development",
		description:
		"Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do ei us mod tempor incididunt ut lab ore et",
		image: "/images/home__fieldImg.png",
	},
	{
		title: "Back End development",
		description:
		"Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do ei us mod tempor incididunt ut lab ore et",
		image: "/images/home__fieldImg.png",
	},
	{
		title: "Security",
		description:
		"Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do ei us mod tempor incididunt ut lab ore et",
		image: "/images/home__fieldImg.png",
	},
	{
		title: "Data science",
		description:
		"Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do ei us mod tempor incididunt ut lab ore et Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do ei us mod tempor incididunt ut lab ore et",
		image: "/images/home__fieldImg.png",
	},
	{
		title: "IOS development",
		description:
		"Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do ei us mod tempor incididunt ut lab ore et",
		image: "/images/home__fieldImg.png",
	},
];

const Home: React.FC<Props> = ({ data }) => {
	return (
		<Layout title="Kawen">
			<section className={`${classes.Home} container`}>
				<h1 className="h4">Explore our paths to find your perfect program</h1>
				{data.map((field: Field) => (
					<section key={field.title}>
						<img src={field.image} alt={`${field.title} image`} />
						<h2>{field.title}</h2>
						<p>{field.description}</p>
						<Link href={`/${field.title.split(" ").join("-")}`}>
							<button className="btn btn-round btn-outline">Explore</button>
						</Link>
					</section>
				))}
			</section>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: { data },
	};
};

export default Home;
