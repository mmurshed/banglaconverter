/******************************************

    This file is part of Bangla Unicode Web Tools 2.

Copyright (C) 2007  S M Mahbub Murshed

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA


	Contains common utilities to:
	- Determine bangla character category
	- Find equivalent kar to sorborno mapping

	Author: S M Mahbub Murshed
	Email: udvranto@yahoo.com
	Version: 1.2.0
	Date: September 06, 2006, XX:XX GMT
*******************************************/


/******************************************
	Determines whether the unicode
	character is an bangla digit
	character or not.

	\param CUni The Unicode character

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
*******************************************/
function IsBanglaDigit(CUni)
{
	if(CUni=='০' || CUni=='১'
	|| CUni=='২' || CUni=='৩'
	|| CUni=='৪' || CUni=='৫'
	|| CUni=='৬' || CUni=='৭'
	|| CUni=='৮' || CUni=='৯')
		return true;

	return false;
} // end function IsBanglaDigit

/******************************************
	Determines whether the unicode
	character is a bangla pre kar
	character or not. Pre kar
	character are appended BEFORE
	a banjonborno or juktakhor character
	after rendering.

	\param CUni The Unicode character

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
*******************************************/
function IsBanglaPreKar(CUni)
{
	if(CUni=='ি' || CUni=='ৈ' 
	|| CUni=='ে' )
		return true;
	
	return false;
} // end function IsBanglaPreKar

/******************************************
	Determines whether the unicode
	character is a bangla post kar
	character or not. Post kar
	character are appended AFTER
	a banjonborno or juktakhor character
	after rendering.

	\param CUni The Unicode character

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
*******************************************/
function IsBanglaPostKar(CUni)
{
	if(CUni == 'া' || CUni=='ো'
	|| CUni=='ৌ' || CUni=='ৗ' || CUni=='ু'
	|| CUni=='ূ' || CUni=='ী'
	|| CUni=='ৃ')
		return true;
	return false;
} // end function IsBanglaPostKar

/******************************************
	Determines whether the unicode
	character is a bangla kar
	character or not. Its a super
	set or Pre and Post kars.

	\param CUni The Unicode character

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
*******************************************/
function IsBanglaKar(CUni)
{
	if(IsBanglaPreKar(CUni) || IsBanglaPostKar(CUni) )
		return true;
	return false;

} // end function IsBanglaKar

/******************************************
	Determines whether the unicode
	character is a bangla banjonborno
	character or not.

	\param CUni The Unicode character

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
*******************************************/
function IsBanglaBanjonborno(CUni)
{
	if(CUni=='ক' || CUni=='খ' || CUni=='গ' || CUni=='ঘ' || CUni=='ঙ' 
        || CUni=='চ' || CUni=='ছ' || CUni=='জ' || CUni=='ঝ' || CUni=='ঞ' 
        || CUni=='ট' || CUni=='ঠ' || CUni=='ড' || CUni=='ঢ' || CUni=='ণ'
        || CUni=='ত' || CUni=='থ' || CUni=='দ' || CUni=='ধ' || CUni=='ন'
        || CUni=='প' || CUni=='ফ' || CUni=='ব' || CUni=='ভ' || CUni=='ম'
        || CUni=='শ' || CUni=='ষ' || CUni=='স' || CUni=='হ' 
	|| CUni=='য' || CUni=='র' || CUni=='ল' || CUni=='য়' 
	|| CUni=='ং' || CUni=='ঃ' || CUni=='ঁ'
	|| CUni=='ৎ')
		return true;

	return false;
} // end function IsBanglaBanjonborno

/******************************************
	Determines whether the unicode
	character is a bangla soroborno
	character or not.

	\param CUni The Unicode character

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
*******************************************/
function IsBanglaSoroborno(CUni)
{
	if(CUni == 'অ' || CUni=='আ'
	|| CUni=='ই' || CUni=='ঈ'
	|| CUni=='উ' || CUni=='ঊ'
	|| CUni=='ঋ' || CUni=='ঌ'
	|| CUni=='এ' || CUni=='ঐ' 
	|| CUni=='ও' || CUni=='ঔ' )
		return true;

	return false;
} // end function IsBanglaSoroborno

/******************************************
	Determines whether the unicode
	character is a bangla nukta
	character or not.

	\param CUni The Unicode character

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
*******************************************/
function IsBanglaNukta(CUni)
{
	if(CUni=='ং' || CUni=='ঃ' || CUni=='ঁ')
		return true;

	return false;

} // end function IsBanglaNukta

/******************************************
	Determines whether the unicode
	character is a bangla ja fola or ra fola
	character or not.

	\param CUni The Unicode string

	Coded by : S M Mahbub Murshed
	Date: August 30, 2006
*******************************************/
function IsBanglaFola(CUni)
{
	if(CUni=="্য" || CUni=="্র")
		return true;

	return false;
} // end function IsBanglaFola

/******************************************
	Determines whether the unicode
	character is a bangla halant
	character or not.

	\param CUni The Unicode character

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
*******************************************/
function IsBanglaHalant(CUni)
{
	if(CUni=='্')
		return true;

	return false;
} // end function IsBanglaHalant


/******************************************
	Determines whether the unicode
	character is a bangla character or not.

	\param CUni The Unicode character

	Coded by : S M Mahbub Murshed
	Date: March 02, 2007
*******************************************/
function IsBangla(CUni)
{
	if(IsBanglaDigit(CUni) || IsBanglaKar(CUni) ||
	IsBanglaBanjonborno(CUni) || IsBanglaSoroborno(CUni) ||
	IsBanglaNukta(CUni) || IsBanglaFola(CUni) || IsBanglaHalant(CUni))
		return true;

	return false;
} // end function IsBangla

/******************************************
	Determines whether the character is 
	a ASCII character or not.

	\param CUni The character

	Coded by : S M Mahbub Murshed
	Date: March 02, 2007
*******************************************/
function IsASCII(CH)
{
	if(CH >= 0 && CH< 128)
		return true;

	return false;
} // end function IsBangla

/******************************************
	Determines whether the
	character is a space
	character or not.

	\param C The character

	Coded by : S M Mahbub Murshed
	Date: August 28, 2006
*******************************************/
function IsSpace(C)
{
	if( C==' ' ||  C=='\t' || C=='\n'
	||  C=='\r')
		return true;

	return false;
} // end function IsSpace

/******************************************
	Maps an unicode character to its
	equivalent soroborno

	\param CUni The Unicode kar character to map with

	Coded by : S M Mahbub Murshed
	Date: August 30, 2006
*******************************************/
function MapKarToSorborno(CUni)
{
	var CSorborno = '';
	if(CUni=='া')
		CSorborno = 'আ';
	else if(CUni=='ি')
		CSorborno = 'ই';
	else if(CUni=='ী')
		CSorborno = 'ঈ';
	else if(CUni=='ু')
		CSorborno = 'উ';
	else if(CUni=='ূ')
		CSorborno = 'ঊ';
	else if(CUni=='ৃ')
		CSorborno = 'ঋ';
	else if(CUni=='ে')
		CSorborno = 'এ';
	else if(CUni=='ৈ')
		CSorborno = 'ঐ';
	else if(CUni=='ো')
		CSorborno = 'ও';
	else if(CUni=="ো")
		CSorborno = 'ও';
	else if(CUni=='ৌ')
		CSorborno = 'ঔ';
	else if(CUni=="ৌ")
		CSorborno = 'ঔ';


	return CSorborno;
} // end function MapKarToSorborno

/******************************************
	Maps an unicode soroborono to its
	equivalent kar

	\param CUni The Unicode sorborno character to map with

	Coded by : S M Mahbub Murshed
	Date: August 30, 2006
*******************************************/
function MapSorbornoToKar(CUni)
{
	var CKar = '';
	if(CUni=='আ')
		CKar = 'া';
	else if(CUni=='ই')
		CKar = 'ি';
	else if(CUni=='ঈ')
		CKar = 'ী';
	else if(CUni=='উ')
		CKar = 'ু';
	else if(CUni=='ঊ')
		CKar = 'ূ';
	else if(CUni=='ঋ')
		CKar = 'ৃ';
	else if(CUni=='এ')
		CKar = 'ে';
	else if(CUni=='ঐ')
		CKar = 'ৈ';
	else if(CUni=='ও')
		CKar = 'ো';
	else if(CUni=='ঔ')
		CKar = 'ৌ';

	return CKar;
} // end function MapSorbornoToKar
