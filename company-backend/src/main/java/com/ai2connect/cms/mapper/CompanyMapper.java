package com.ai2connect.cms.mapper;


import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Component;
import com.ai2connect.cms.domain.model.Company;
import com.ai2connect.cms.domain.model.Provider;
import com.ai2connect.cms.domain.model.Seeker;
import com.ai2connect.cms.domain.model.attribute.AttributeValue;
import com.ai2connect.cms.domain.model.dtos.CompanyDTOs.AttributeValueDTO;
import com.ai2connect.cms.domain.model.dtos.CompanyDTOs.CompanyRequestDTO;
import com.ai2connect.cms.domain.model.dtos.CompanyDTOs.CompanyResponseDTO;
import com.ai2connect.cms.domain.model.dtos.ProviderDTOs.ProviderRequestDTO;
import com.ai2connect.cms.domain.model.dtos.ProviderDTOs.ProviderResponseDTO;
import com.ai2connect.cms.domain.model.dtos.SeekerDTOs.SeekerRequestDTO;
import com.ai2connect.cms.domain.model.dtos.SeekerDTOs.SeekerResponseDTO;


@Component
public class CompanyMapper {

    public Company toEntity(CompanyRequestDTO dto) {
        Company company = new Company();
        updateEntityFromDto(company, dto);
        return company;
    }

    public Provider toEntity(ProviderRequestDTO dto) {
        Provider provider = new Provider();
        updateEntityFromDto(provider, dto);
        
        // Provider-spezifische Felder
        provider.setTechStack(dto.getTechStack());
        provider.setServices(dto.getServices());
        provider.setTeamSize(dto.getTeamSize());
        provider.setCertifications(dto.getCertifications());
        provider.setHourlyRate(dto.getHourlyRate());
        
        return provider;
    }

    public void updateEntityFromDto(Company company, CompanyRequestDTO dto) {
        company.setName(dto.getName());
        company.setEmail(dto.getEmail());
        company.setWebsite(dto.getWebsite());
        company.setPhone(dto.getPhone());
        company.setCompanySize(dto.getCompanySize());
        
        // Attribute verarbeiten
        company.getAttributes().clear();
        dto.getAttributes().forEach(attrDto -> 
            company.addAttribute(attrDto.getName(), attrDto.getValue())
        );
    }

    public CompanyResponseDTO toDto(Company company) {
        CompanyResponseDTO dto = new CompanyResponseDTO();
        dto.setId(company.getId());
        dto.setName(company.getName());
        dto.setEmail(company.getEmail());
        dto.setWebsite(company.getWebsite());
        dto.setPhone(company.getPhone());
        dto.setCompanySize(company.getCompanySize());
        dto.setStatus(company.getStatus());
        dto.setCreatedAt(company.getCreatedAt());
        dto.setUpdatedAt(company.getUpdatedAt());
        dto.setVersion(company.getVersion());
        
        // Attribute mappen
        Set<AttributeValueDTO> attributeDtos = new HashSet<>();
        for (AttributeValue attr : company.getAttributes()) {
            AttributeValueDTO attrDto = new AttributeValueDTO();
            attrDto.setName(attr.getAttributeName());
            attrDto.setValue(attr.getAttributeValue());
            attributeDtos.add(attrDto);
        }
        dto.setAttributes(attributeDtos);
        
        return dto;
    }

    public ProviderResponseDTO toDto(Provider provider) {
        ProviderResponseDTO dto = new ProviderResponseDTO();
        // Basis-Felder von Company
        CompanyResponseDTO baseDto = toDto((Company) provider);
        // Kopiere alle Basis-Felder
        copyBaseFields(baseDto, dto);
        
        // Provider-spezifische Felder
        dto.setTechStack(provider.getTechStack());
        dto.setServices(provider.getServices());
        dto.setTeamSize(provider.getTeamSize());
        dto.setCertifications(provider.getCertifications());
        dto.setHourlyRate(provider.getHourlyRate());
        
        return dto;
    }

    private void copyBaseFields(CompanyResponseDTO from, CompanyResponseDTO to) {
        to.setId(from.getId());
        to.setName(from.getName());
        to.setEmail(from.getEmail());
        to.setWebsite(from.getWebsite());
        to.setPhone(from.getPhone());
        to.setCompanySize(from.getCompanySize());
        to.setStatus(from.getStatus());
        to.setAttributes(from.getAttributes());
        to.setCreatedAt(from.getCreatedAt());
        to.setUpdatedAt(from.getUpdatedAt());
        to.setVersion(from.getVersion());
    }
    
 // Seeker Mapping Methoden
    public Seeker toEntity(SeekerRequestDTO dto) {
        Seeker seeker = new Seeker();
        updateEntityFromDto(seeker, dto);
        
        seeker.setCurrentTechStack(dto.getCurrentTechStack());
        seeker.setImplementationTimeline(dto.getImplementationTimeline());
        seeker.setBudgetRange(dto.getBudgetRange());
        seeker.setUseCases(dto.getUseCases());
        
        return seeker;
    }

    public SeekerResponseDTO toDto(Seeker seeker) {
        SeekerResponseDTO dto = new SeekerResponseDTO();
        CompanyResponseDTO baseDto = toDto((Company) seeker);
        copyBaseFields(baseDto, dto);
        
        dto.setCurrentTechStack(seeker.getCurrentTechStack());
        dto.setImplementationTimeline(seeker.getImplementationTimeline());
        dto.setBudgetRange(seeker.getBudgetRange());
        dto.setUseCases(seeker.getUseCases());
        
        return dto;
    }
//
//    // Hilfsmethode zum Kopieren der Basis-Felder
//    private void copyBaseFields(CompanyResponseDTO from, CompanyResponseDTO to) {
//        to.setId(from.getId());
//        to.setName(from.getName());
//        to.setEmail(from.getEmail());
//        to.setWebsite(from.getWebsite());
//        to.setPhone(from.getPhone());
//        to.setCompanySize(from.getCompanySize());
//        to.setStatus(from.getStatus());
//        to.setAttributes(from.getAttributes());
//        to.setCreatedAt(from.getCreatedAt());
//        to.setUpdatedAt(from.getUpdatedAt());
//        to.setVersion(from.getVersion());
//    }
}