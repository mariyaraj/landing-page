package com.ai2connect.cms;



import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.time.LocalDateTime;
import java.util.UUID;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class CompanyManagementService1ApplicationTests {
    @Autowired
    private MockMvc mockMvc;
    
//    @Test
//    public void testGetAllCompanies1() throws Exception {
//        mockMvc.perform(get("/api/companies")
//                .with(user("adminMariya").password("admin").roles("USER")))
//                .andExpect(status().isOk());
//    }
//    
//    private String generateRandomEmail() {
//        String uniqueId = UUID.randomUUID().toString(); // Erzeugt eine eindeutige ID
//        return "test" + uniqueId + "@example.com";
//    }
//
//    
//
//	@Test
//	public void testCreateCompany() throws Exception {
//		 String randomEmail = generateRandomEmail(); 
//	    
//
//	    mockMvc.perform(post("/api/companies")
//	            .contentType(MediaType.APPLICATION_JSON)
//	            .content("{\"name\": \"New Company\", \"email\":"+randomEmail+", \"phone\": \"123456789\", \"createdAt\": \"" + LocalDateTime.now().toString() + "\"}")
//	            .with(csrf())
//	            .with(user("adminMariya").password("admin").roles("USER")))
//	            .andExpect(status().isCreated());
//	}

}
