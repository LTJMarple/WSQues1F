import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';


const Questionnaire = () => {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://wsques1-backend.herokuapp.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.text();
            console.log('Server response:', data); // Debugging log
            alert(data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Windrow Studios Client Onboarding Questionnaire</h1>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Business Name:</label>
                <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email Address:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Phone Number:</label>
                <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Website:</label>
                <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Social Media Handles:</label>
                <input
                    type="text"
                    name="socialMedia"
                    value={formData.socialMedia}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Briefly describe your business or personal brand:</label>
                <textarea
                    name="businessDescription"
                    value={formData.businessDescription}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>What are your primary products or services?</label>
                <textarea
                    name="productsServices"
                    value={formData.productsServices}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Who is your target audience? (Demographics, interests, etc.)</label>
                <textarea
                    name="targetAudience"
                    value={formData.targetAudience}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>What are your main goals for this partnership?</label>
                <textarea
                    name="partnershipGoals"
                    value={formData.partnershipGoals}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Do you have an existing brand identity? (Logo, color scheme, fonts, etc.)</label>
                <textarea
                    name="existingBrandIdentity"
                    value={formData.existingBrandIdentity}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Describe the personality and style of your brand:</label>
                <textarea
                    name="brandPersonality"
                    value={formData.brandPersonality}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>What are your brand values and mission statement?</label>
                <textarea
                    name="brandValues"
                    value={formData.brandValues}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Are there any brands or businesses you admire? (Please specify why)</label>
                <textarea
                    name="admiredBrands"
                    value={formData.admiredBrands}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Do you have an existing website?</label>
                <textarea
                    name="existingWebsite"
                    value={formData.existingWebsite}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>What are its current strengths and weaknesses?</label>
                <textarea
                    name="websiteStrengths"
                    value={formData.websiteStrengths}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>What functionalities do you need on your website? (e.g., e-commerce, blog, portfolio, booking system, etc.)</label>
                <textarea
                    name="websiteFunctionalities"
                    value={formData.websiteFunctionalities}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Do you require any specific integrations? (e.g., payment gateways, CRM, email marketing, etc.)</label>
                <textarea
                    name="specificIntegrations"
                    value={formData.specificIntegrations}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>What is your preferred website platform or CMS? (e.g., WordPress, Shopify, Squarespace, etc.)</label>
                <input
                    type="text"
                    name="preferredPlatform"
                    value={formData.preferredPlatform}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>What types of content do you currently use or plan to use? (e.g., blogs, videos, podcasts, social media posts, etc.)</label>
                <textarea
                    name="contentTypes"
                    value={formData.contentTypes}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Do you have existing content that needs to be incorporated or rebranded?</label>
                <textarea
                    name="existingContent"
                    value={formData.existingContent}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>What kind of media creation do you need? (e.g., photos, videos, graphics, etc.)</label>
                <textarea
                    name="mediaCreation"
                    value={formData.mediaCreation}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>How often do you plan to publish new content?</label>
                <textarea
                    name="contentPublishingFrequency"
                    value={formData.contentPublishingFrequency}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Which social media platforms are you currently using?</label>
                <textarea
                    name="socialMediaPlatforms"
                    value={formData.socialMediaPlatforms}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>What are your social media goals? (e.g., brand awareness, lead generation, community building, etc.)</label>
                <textarea
                    name="socialMediaGoals"
                    value={formData.socialMediaGoals}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Do you have any existing marketing campaigns or strategies?</label>
                <textarea
                    name="marketingStrategies"
                    value={formData.marketingStrategies}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>What types of marketing support do you need? (e.g., ad creation, SEO, email marketing, etc.)</label>
                <textarea
                    name="marketingSupport"
                    value={formData.marketingSupport}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>What products or services do you sell online?</label>
                <textarea
                    name="ecommerceProducts"
                    value={formData.ecommerceProducts}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>How many products do you currently have, or plan to have, listed on your online store?</label>
                <textarea
                    name="ecommerceProductCount"
                    value={formData.ecommerceProductCount}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Do you need help with inventory management and automated inventory sync across channels?</label>
                <textarea
                    name="inventoryManagement"
                    value={formData.inventoryManagement}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>What shipping methods do you use or plan to use?</label>
                <textarea
                    name="shippingMethods"
                    value={formData.shippingMethods}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Do you require assistance with sales tax calculation?</label>
                <textarea
                    name="salesTax"
                    value={formData.salesTax}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Are there any specific challenges you’re facing that you’d like us to address?</label>
                <textarea
                    name="specificChallenges"
                    value={formData.specificChallenges}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Do you have any additional comments or requirements?</label>
                <textarea
                    name="additionalComments"
                    value={formData.additionalComments}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Preferred dates and times for the follow-up meeting:</label>
                <textarea
                    name="followUpAvailability"
                    value={formData.followUpAvailability}
                    onChange={handleChange}
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Questionnaire;
