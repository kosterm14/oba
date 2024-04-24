import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';
import { PUBLIC_API_KEY } from '$env/static/public'

export async function load() {
	let query = gql`
		query betalingen {
			paymentHistories {
				type
				date
				amount
				paymentMethod
			}
			balances {
				balance
			}
			subscriptionCounters {
				bookCurrent
				bookMax
				ebookCurrent
				ebookMax
				movieCurrent
				movieMax
				activityDiscount
				computerTime
				subscriptionType
			}
		}
	`;

	const hygraphData = await hygraph.request(query);

	const publicKey = PUBLIC_API_KEY;

	const space = '%20';
	const bookItems = 'boeken';
	const EbookItems = 'e-books';
	const audioItems = 'luisterboeken';
	const urlSearch = 'search/';
	const urlBase = 'https://zoeken.oba.nl/api/v1/';
	const urlQuery = '?q=';
	const urlDefault = 'special:all';
	const urlKey = `&facet=pubyear(2022)&authorization=${publicKey}`;
	const urlOutput = '&refine=true&output=json';
	const defaultUrlBooks =
		urlBase + urlSearch + urlQuery + urlDefault + space + bookItems + urlKey + urlOutput;
	const defaultUrleBooks =
		urlBase + urlSearch + urlQuery + urlDefault + space + EbookItems + urlKey + urlOutput;
	const defaultUrlAudioBooks =
		urlBase + urlSearch + urlQuery + urlDefault + space + audioItems + urlKey + urlOutput;

	const responseBooks = await fetch(defaultUrlBooks);

	const responseEBooks = await fetch(defaultUrleBooks);

	const responseAudioBooks = await fetch(defaultUrlAudioBooks);

	const apiBooks = await responseBooks.json();
	const apiAudioBooks = await responseAudioBooks.json();
	const apiEBooks = await responseEBooks.json();

	return {
		hygraphData,
		apiBooks,
		apiAudioBooks,
		apiEBooks
		// andere gegevens die je wilt doorgeven aan de component
	};
}
