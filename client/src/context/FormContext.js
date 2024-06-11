import React, { createContext, useState } from 'react';

export const FormContext = createContext();

const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phoneNumber: '',
        website: '',
        socialMedia: '',
        businessDescription: '',
        productsServices: '',
        targetAudience: '',
        partnershipGoals: '',
        existingBrandIdentity: '',
        brandPersonality: '',
        brandValues: '',
        admiredBrands: '',
        existingWebsite: '',
        websiteStrengths: '',
        websiteWeaknesses: '',
        websiteFunctionalities: '',
        specificIntegrations: '',
        preferredPlatform: '',
        contentTypes: '',
        existingContent: '',
        mediaCreation: '',
        contentPublishingFrequency: '',
        socialMediaPlatforms: '',
        socialMediaGoals: '',
        marketingStrategies: '',
        marketingSupport: '',
        ecommerceProducts: '',
        ecommerceProductCount: '',
        inventoryManagement: '',
        shippingMethods: '',
        salesTax: '',
        specificChallenges: '',
        additionalComments: '',
        followUpAvailability: ''
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
