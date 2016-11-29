import * as firebase from 'firebase';
import React, { Component } from 'react';
import ReactNative from 'react-native';
import Dimensions from 'Dimensions';

const ProgramListItem = require('../components/ProgramListItem.js');

const { View, ToolbarAndroid, Text, StyleSheet, ListView, Alert, ActivityIndicator} = ReactNative;
class ProgramsList extends React.Component{



  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.programsRef = this.getRef().child('programs');
  }

  getRef(){
    return firebaseApp.database().ref();
  }

  listenForPrograms(programsRef){
    programsRef.orderByChild(encodeURIComponent(this.props.passProps.title)).equalTo(encodeURIComponent(this.props.passProps.title)).on('value', (snap) => {
      var programs = [];
      snap.forEach((child) => {
        if (child.val().programStatus === "ACTIVE"){
          var keys = [];
          var mentalHealthAndSubstanceAbuseServicesKey = encodeURIComponent("Mental Health and Substance Abuse Services");
          keys.push(mentalHealthAndSubstanceAbuseServicesKey);
          var crisisInterventionHotlinesKey = encodeURIComponent("Crisis Intervention Hotlines");
          keys.push(crisisInterventionHotlinesKey);
          var emergencyShelterKey = encodeURIComponent("Emergency Shelter");
          keys.push(emergencyShelterKey);
          var transitionalShelterKey = encodeURIComponent("Transitional Shelter");
          keys.push(transitionalShelterKey);
          var veteransShelterKey = encodeURIComponent("Veterans Shelter");
          keys.push(veteransShelterKey);
          var domesticViolenceShelterKey = encodeURIComponent("Domestic Violence Shelter");
          keys.push(domesticViolenceShelterKey);
          var domesticViolenceSexualAssaultKey = encodeURIComponent("Domestic Violence / Sexual Assault");
          keys.push(domesticViolenceSexualAssaultKey);
          var alcoholDrugsKey = encodeURIComponent("Alcohol / Drugs");
          keys.push(alcoholDrugsKey);
          var emergencyMedicalKey = encodeURIComponent("Emergency Medical");
          keys.push(emergencyMedicalKey);
          var mentalHealthCrisisKey = encodeURIComponent("Mental Health Crisis");
          keys.push(mentalHealthCrisisKey);
          var sexTraffickingExploitationKey = encodeURIComponent("Sex Trafficking / Exploitation");
          keys.push(sexTraffickingExploitationKey);
          var suicidePreventionKey = encodeURIComponent("Suicide Prevention");
          keys.push(suicidePreventionKey);
          var driverLicenseIDsKey = encodeURIComponent("Driver License / IDs");
          keys.push(driverLicenseIDsKey);
          var benefitsIssuesApplicationsKey = encodeURIComponent("Benefits Issues / Applications");
          keys.push(benefitsIssuesApplicationsKey);
          var insuranceIssuesApplicationsKey = encodeURIComponent("Insurance Issues / Applications");
          keys.push(insuranceIssuesApplicationsKey);
          var otherLegalHelpKey = encodeURIComponent("Other Legal Help");
          keys.push(otherLegalHelpKey);
          var legalCounselingKey = encodeURIComponent("Legal Counseling");
          keys.push(legalCounselingKey);
          var restrainingOrdersKey = encodeURIComponent("Restraining Orders");
          keys.push(restrainingOrdersKey);
          var identifyTheftKey = encodeURIComponent("Identify Theft");
          keys.push(identifyTheftKey);
          var veteransLegalIssuesKey = encodeURIComponent("Veterans Legal Issues");
          keys.push(veteransLegalIssuesKey);
          var undocumentedAssistanceKey = encodeURIComponent("Undocumented Assistance");
          keys.push(undocumentedAssistanceKey);
          var nameChangeKey = encodeURIComponent("Name Change");
          keys.push(nameChangeKey);
          var recordExpungementKey = encodeURIComponent("Record Expungement");
          keys.push(recordExpungementKey);
          var warrantsTicketsArrestsKey = encodeURIComponent("Warrants / Tickets / Arrests");
          keys.push(warrantsTicketsArrestsKey);
          var accessCenterKey = encodeURIComponent("Access Center");
          keys.push(accessCenterKey);
          var caseManagementKey = encodeURIComponent("Case Management");
          keys.push(caseManagementKey);
          var childcareChildrensProgramsKey = encodeURIComponent("Childcare / Children's Programs");
          keys.push(childcareChildrensProgramsKey);
          var clothingClosetKey = encodeURIComponent("Clothing Closet");
          keys.push(clothingClosetKey);
          var computersKey = encodeURIComponent("Computers");
          keys.push(computersKey);
          var supportGroupKey = encodeURIComponent("Support Group");
          keys.push(supportGroupKey);
          var educationAssistanceKey = encodeURIComponent("Education Assistance");
          keys.push(educationAssistanceKey);
          var HIVServicesKey = encodeURIComponent("HIV Services");
          keys.push(HIVServicesKey);
          var housingReferralsKey = encodeURIComponent("Housing Referrals");
          keys.push(housingReferralsKey);
          var lifeSkillsKey = encodeURIComponent("Life Skills");
          keys.push(lifeSkillsKey);
          var legalAssistanceKey = encodeURIComponent("Legal Assistance");
          keys.push(legalAssistanceKey);
          var lockersStorageKey = encodeURIComponent("Lockers / Storage");
          keys.push(lockersStorageKey);
          var mentalHealthReferralsKey = encodeURIComponent("Mental Health Referrals");
          keys.push(mentalHealthReferralsKey);
          var medicalReferralsKey = encodeURIComponent("Medical Referrals");
          keys.push(medicalReferralsKey);
          var parentingSkillsKey = encodeURIComponent("Parenting Skills");
          keys.push(parentingSkillsKey);
          var petVetCareKey = encodeURIComponent("Pet / Vet Care");
          keys.push(petVetCareKey);
          var streetOutreachKey = encodeURIComponent("Street Outreach");
          keys.push(streetOutreachKey);
          var metroTokensKey = encodeURIComponent("Metro Tokens");
          keys.push(metroTokensKey);
          var childPediatricKey = encodeURIComponent("Child / Pediatric");
          keys.push(childPediatricKey);
          var chronicDiseaseMngmtKey = encodeURIComponent("Chronic Disease Mngmt");
          keys.push(chronicDiseaseMngmtKey);
          var substanceAbuseKey = encodeURIComponent("Substance Abuse");
          keys.push(substanceAbuseKey);
          var eyeCareKey = encodeURIComponent("Eye care");
          keys.push(eyeCareKey);
          var familyPlanning = encodeURIComponent("Family Planning");
          keys.push(familyPlanning);
          var STDHIVServices = encodeURIComponent("STD / HIV Services");
          keys.push(STDHIVServices);
          var mentalHealthKey = encodeURIComponent("Mental Health");
          keys.push(mentalHealthKey);
          var mobileClinicKey = encodeURIComponent("Mobile Clinic");
          keys.push(mobileClinicKey);
          var routineHealthKey = encodeURIComponent("Routine Health");
          keys.push(routineHealthKey);
          var transgenderYouthKey = encodeURIComponent("Transgender Youth");
          keys.push(transgenderYouthKey);
          var urgentCareKey = encodeURIComponent("Urgent Care");
          keys.push(urgentCareKey);
          var collegePrepServicesKey = encodeURIComponent("College Prep/Services");
          keys.push(collegePrepServicesKey);
          var publicK12Key = encodeURIComponent("Public K-12");
          keys.push(publicK12Key);
          var publicLibraryKey = encodeURIComponent("Public Library");
          keys.push(publicLibraryKey);
          var schoolSuppliesKey = encodeURIComponent("School Supplies");
          keys.push(schoolSuppliesKey);
          var groceriesFoodPantryKey = encodeURIComponent("Groceries/Food Pantry");
          keys.push(groceriesFoodPantryKey);
          var careerCounselingKey = encodeURIComponent("Career Counseling");
          keys.push(careerCounselingKey);
          var jobPlacementKey = encodeURIComponent("Job Placement");
          keys.push(jobPlacementKey);
          var jobReadinessKey = encodeURIComponent("Job Readiness");
          keys.push(jobReadinessKey);
          var vocationalJobTrainingKey = encodeURIComponent("Vocational / Job Training");
          keys.push(vocationalJobTrainingKey);
          var currentFormerFosterYouthHotlineKey = encodeURIComponent("Current / Former Foster Youth Hotline");
          keys.push(currentFormerFosterYouthHotlineKey);
          var domesticViolenceSexualAssaultHotlineKey = encodeURIComponent("Domestic Violence / Sexual Assault Hotline");
          keys.push(domesticViolenceSexualAssaultHotlineKey);
          var foodShelterHotlineKey = encodeURIComponent("Food / Shelter Hotline");
          keys.push(foodShelterHotlineKey);
          var healthHotlineKey = encodeURIComponent("Health Hotline");
          keys.push(healthHotlineKey);
          var legalAssistanceHotlineKey = encodeURIComponent("Legal Assistance Hotline");
          keys.push(legalAssistanceHotlineKey);
          var LGBTQHotlineKey = encodeURIComponent("LGBTQ Hotline");
          keys.push(LGBTQHotlineKey);
          var pregnancyHotlineKey = encodeURIComponent("Pregnancy Hotline");
          keys.push(pregnancyHotlineKey);
          var suicidePreventionHotlineKey = encodeURIComponent("Suicide Prevention Hotline");
          keys.push(suicidePreventionHotlineKey);
          var sexTraffickingExploitationHotline = encodeURIComponent("Sex Trafficking / Exploitation Hotline");
          keys.push(sexTraffickingExploitationHotline);
          var dropinCenterKey = encodeURIComponent("Drop-in Center");
          keys.push(dropinCenterKey);
          var crisisHotlineKey = encodeURIComponent("Crisis Hotline");
          keys.push(crisisHotlineKey);
          var veteransHotlineKey = encodeURIComponent("Veterans Hotline");
          keys.push(veteransHotlineKey);
          var clinicHospitalLocatorKey = encodeURIComponent("Clinic / Hospital Locator");
          keys.push(clinicHospitalLocatorKey);
          var generalReliefKey = encodeURIComponent("General Relief");
          keys.push(generalReliefKey);
          var MediCalHealthInsuranceKey = encodeURIComponent("Medi-Cal Health Insurance");
          keys.push(MediCalHealthInsuranceKey);
          var healthInsuranceForCurrentFormerFosterYouthKey = encodeURIComponent("Health Insurance for Current/Former Foster Youth");
          keys.push(healthInsuranceForCurrentFormerFosterYouthKey);
          var womanInfantsAndChildrenWICKey = encodeURIComponent("Woman, Infants and Children (WIC)");
          keys.push(womanInfantsAndChildrenWICKey);
          var transportationAssistanceKey = encodeURIComponent("Transportation Assistance");
          keys.push(transportationAssistanceKey);
          var substanceAbuseReferralsKey = encodeURIComponent("Substance Abuse Referrals");
          keys.push(substanceAbuseReferralsKey);
          var genderNeutralBathroomsKey = encodeURIComponent("Gender Neutral Bathrooms");
          keys.push(genderNeutralBathroomsKey);
          var housingAssistanceReferralsKey = encodeURIComponent("Housing Assistance / Referrals");
          keys.push(housingAssistanceReferralsKey);
          var allowsServiceAnimalsKey = encodeURIComponent("Allows Service Animals");
          keys.push(allowsServiceAnimalsKey);
          var allowsAnimalsKey = encodeURIComponent("Allows Animals");
          keys.push(allowsAnimalsKey);
          var accessibleToTheDisabledKey = encodeURIComponent("Accessible to the Disabled");
          keys.push(accessibleToTheDisabledKey);
          var housingVouchersKey = encodeURIComponent("Housing Vouchers");
          keys.push(housingVouchersKey);
          var clothesClosetKey = encodeURIComponent("Clothes Closet");
          keys.push(clothesClosetKey);
          var jobSearchKey = encodeURIComponent("Job Search");
          keys.push(jobSearchKey);
          var probationFelonAssistanceKey = encodeURIComponent("Probation / Felon Assistance");
          keys.push(probationFelonAssistanceKey);
          var mailServicesKey = encodeURIComponent("Mail Services");
          keys.push(mailServicesKey);
          var announcementsCalendarKey = encodeURIComponent("Announcements/Calendar");
          keys.push(announcementsCalendarKey);
          var freeStuffKey = encodeURIComponent("Free stuff");
          keys.push(freeStuffKey);
          var personalNeedsKey = encodeURIComponent("Personal Needs");
          keys.push(personalNeedsKey);
          programs.push({
            nameofagency: child.val().nameofagency,
            ophours: child.val().ophours,
            nameofprogram: child.val().nameofprogram,
            shortdescription: child.val().shortdescription,
            ContactPhone: child.val().ContactPhone,
            ContactName: child.val().ContactName,
            addressline1: child.val().addressline1,
            addressline2: child.val().addressline2,
            city: child.val().city,
            state: child.val().state,
            zip: child.val().zip,
            lat: child.val().lat,
            lon: child.val().lon,
            Website: child.val().Website,
            websitealt1: child.val().websitealt1,
            websitealt2: child.val().websitealt2,
            populationserved: child.val().populationserved,
            fromage: child.val().fromage,
            toage: child.val().toage,
            Languages: child.val().Languages,
            description: child.val().description,
            Runaways: child.val().Runaways,
            Emancipation:child.val().Emancipation,
            Criminal: child.val().Criminal,
            Counseling: child.val().Counseling,
            Internet: child.val().Internet,
            Laundry: child.val().Laundry,
            Recreation: child.val().Recreation,
            Hygiene: child.val().Hygiene,
            Dental: child.val().Dental,
            Pregnancy: child.val().Pregnancy,
            GED: child.val().GED,
            Tutoring: child.val.Tutoring,
            Meals: child.val().Meals,
            CalWorks: child.val().CalWorks,
            CalFresh: child.val().CalFresh,
            Childcare: child.val().Childcare,
            Haircuts: child.val().Haircuts,
            Showers: child.val().Showers,
            Classes: child.val().Classes,
            Wifi: child.val().Wifi,
            _key: child.key
          });
          for (var key in keys){
            programs[programs.length - 1][keys[key]] = child.val()[keys[key]];
          } 
          var otherKeys = ["Runaways", "Emancipation", "Criminal", "Counseling", "Internet", "Laundry", "Recreation", "Hygiene", "Dental", "Pregnancy", "GED", "Tutoring", "Meals", "CalWorks", "CalFresh", "Childcare", "Haircuts", "Showers", "Classes", "Wifi"];
          for (var key in otherKeys){
            keys.push(otherKeys[key])
          }
          programs[programs.length - 1]["servicesKeys"] = keys;
          
          var fosterYouthSpecialtyKey = encodeURIComponent("Foster Youth: Specialty");
          programs[programs.length - 1][fosterYouthSpecialtyKey] = child.val()[fosterYouthSpecialtyKey];
          var lgbtqSpecialtyKey = encodeURIComponent("LGBTQ: Specialty");
          programs[programs.length - 1][lgbtqSpecialtyKey] = child.val()[lgbtqSpecialtyKey];
          var veteransSpecialtyKey = encodeURIComponent("Veterans: Specialty");
          programs[programs.length - 1][veteransSpecialtyKey] = child.val()[veteransSpecialtyKey]; 
        }
      });
      // remove activity indicator
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(programs),
        animating:false
      });
    });
  }

  _renderProgram(program) {
    const onPress = () => {
      this.props.navigator.push({
        id: 'programDetail',
        passProps: {
          program:program,
        },
      });
    };
    return (<ProgramListItem item={program} onPress={onPress} />);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.fullScreen}>
          <ToolbarAndroid style={styles.toolbar}
                  navIcon={{uri:"ic_arrow_back_white_24dp"}}
                  title={this.props.passProps.title}
                  onIconClicked={this.props.navigator.pop}
                  actions={[{title: 'Filter', icon: {uri:"ic_filter_list_white_24dp"}, show: 'always', showWithText:true}]}
                  titleColor={'#FFFFFF'}/>
          <ListView dataSource={this.state.dataSource} renderRow={this._renderProgram.bind(this)} enableEmptySections={true} style={styles.listView} />
        </View>
        <View style={styles.floatView}>
          <ActivityIndicator
            animating={this.state.animating}
            style={[styles.activityIndicator]}
            size="large"
          />
        </View>
      </View>
    );
  }

  componentDidMount(){
    this.listenForPrograms(this.programsRef);
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  toolbar: {
    backgroundColor:'#009688',
    height:56,
  },
  listView: {
    // flex:1,
    backgroundColor:'#ffffff'
  },
  activityIndicator:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  floatView:{
    position: 'absolute',
    width: 100,
    height: 100,
    top: Dimensions.get('window').height / 2 - 50,
    left: Dimensions.get('window').width / 2 - 50,
  },
});

module.exports = ProgramsList;
